'use client'

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';

export default function ImageSearchPage() {
  const [searchParams] = useSearchParams();
  const startIndex = searchParams.get('start') || '1';

  const fetchImageSearchResults = async () => {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchParams.get('searchTerm')}&start=${startIndex}`
    );
    if (!response.ok) throw new Error('Something went wrong');
    const data = await response.json();
    return data.items;
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageSearchResultsFetcher />
      </Suspense>
    </div>
  );
}

function ImageSearchResultsFetcher() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImageSearchResults()
      .then((data) => setResults(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>Error: {error.message}</h1>
        <p className='text-lg'>
          Try again later or search for something else{' '}
          <Link href='/' className='text-blue-500'>
            Home
          </Link>
        </p>
      </div>
    );
  }

  if (!results) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>
          No results found for {searchParams.get('searchTerm')}
        </h1>
        <p className='text-lg'>
          Try searching the web or images for something else{' '}
          <Link href='/' className='text-blue-500'>
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <ImageSearchResults results={results} />;
}
