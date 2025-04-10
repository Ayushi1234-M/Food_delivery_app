import { ShimmerThumbnail, ShimmerTitle, ShimmerText } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div style={{ display: 'grid', gap: '20px', marginRight:'200px', marginLeft:'100px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
      {[...Array(10)].map((_, index) => (
        <div key={index} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px'}}>
          <ShimmerThumbnail height={200} rounded />
          <ShimmerTitle line={2} gap={12} />
          <ShimmerText line={3} gap={12} />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
