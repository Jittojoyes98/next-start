export default function Blog({ params }) {
  return (
    <>
      <h1>This the blog post of {params.slug}</h1>
    </>
  );
}
