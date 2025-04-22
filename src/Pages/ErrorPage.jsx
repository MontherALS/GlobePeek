import Header from "../Comp/Header";
export default function ErrorPage() {
  return (
    <>
      <Header />
      <main
        className="flex flex-col justify-center items-center
       h-[90vh] font-Crimson font-extrabold  gap-5"
      >
        <h1 className="text-xl sm:text-4xl lg:text-5xl">
          SOMETHING WENT WRONG !
        </h1>
        <p className="text-lg sm:text-2xl lg:text-3xl text-red-600 animate-bounce ">
          Could not find the page path...
        </p>
      </main>
    </>
  );
}
