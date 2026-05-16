export function ProfilePhoto() {
  return (
    <div className="mx-auto mb-8 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-1 shadow-2xl shadow-cyan-500/20 md:h-52 md:w-52">
      <div className="h-full w-full overflow-hidden rounded-full border border-white bg-white dark:border-slate-950 dark:bg-slate-900">
        <img
          src="/muhammad-hegazy-profile.jpeg"
          alt="Muhammad Hegazy"
          className="h-full w-full object-cover object-[50%_28%]"
        />
      </div>
    </div>
  );
}
