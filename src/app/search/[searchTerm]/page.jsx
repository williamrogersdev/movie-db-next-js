import Results from "@/components/Results";

export default async function SearchPage({params}) {



const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&page=1`)



if (!res.ok) {
    throw new Error("error fetching data")
  }

  const data = await res.json();

const results = data.results;

  return (
    <div>

{results && results.length === 0 && <h1 className="text-2xl text-center">No results found</h1>}

{results && <Results results={results}/>}

    </div>
  )
}
