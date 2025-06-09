export const InfoItem = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
      <Icon />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};