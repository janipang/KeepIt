import { useEffect, useState } from "react";
import axios from "axios";

type Favorite = {
  image: string;
  like: number;
  dislike: number;
  place: string;
};

export default function BookmarkPage() {
  const [mockdata, setMockData] = useState<Favorite[]>([]);

  useEffect(() => {
    async function fetchBookmark() {
      const response = await axios.get("http://localhost:8000/bookmarks");
      setMockData(response.data);
    }

    fetchBookmark();
  }, []);

  return (
    <div>
      {mockdata.map((data, index) => (
        <div key={index}>
          <Card data={data} />
        </div>
      ))}
    </div>
  );
}

export function Card({ data }: { data: Favorite }) {
  const [state, setState] = useState<boolean>(false);
  async function deleteBookmark() {
    const response = await axios.delete("http://localhost:8000/");
  }

  return <button onClick={() => deleteBookmark()}>delete</button>;
}
