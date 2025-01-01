import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/8sA374V5hf3YLRRn7QFQxwjrUuWNMbRcoSkHXny3zaFdGvOI",
  "https://utfs.io/f/8sA374V5hf3YfUWAFP3c16r7RuJ4KWz0kCPVcZTgjeLnpOSl",
  "https://utfs.io/f/8sA374V5hf3Yf7IWUsc16r7RuJ4KWz0kCPVcZTgjeLnpOSlx",
  "https://utfs.io/f/8sA374V5hf3YTAgRM6Nkne6OEoMZlJs2pXz9wi4SRL0Dt3ja",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))
      }
      </div>
    </main>
  );
}
