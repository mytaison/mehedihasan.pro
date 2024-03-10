const ComingSoon = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-4 lg:gap-8 w-full items-center justify-center min-h-[40vh] md:min-h-[70vh] mt-10">
      <div className="absolute rounded-xl min-w-[300px] min-h-[300px] md:min-w-[500px] md:min-h-[400px] z-0 neumorph-convex dark:neumorph-convex-dark"></div>
      <div className="absolute rounded-xl min-w-[260px] min-h-[260px] md:min-w-[440px] md:min-h-[340px] z-0 neumorph-convex dark:neumorph-convex-dark"></div>
      <div className="absolute rounded-xl min-w-[220px] min-h-[220px] md:min-w-[380px] md:min-h-[280px] z-0 neumorph-convex dark:neumorph-convex-dark flex items-center justify-center font-mudhoney text-2xl md:text-4xl lg:text-5xl">
        Coming soon...
      </div>
    </div>
  );
};

export default ComingSoon;
