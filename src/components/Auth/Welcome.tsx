export default function WelcomeMessage() {
    return (
      <div className="flex flex-col mt-5 select-none p-6">
        <h1 className="text-3xl font-semibold text-neutral-800 dark:text-white">
          Boas-vindas!
        </h1>
        <p className="text-lg font-medium text-gray-400 mt-5 dark:text-gray-300">
          Entre utilizando uma das opções abaixo
        </p>
      </div>
    );
  }