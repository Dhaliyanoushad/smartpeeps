/* eslint-disable no-unused-vars */
const DashboardCard = ({ title, value, icon: Icon, bgColor }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md text-white ${bgColor} flex items-center gap-4`}
    >
      <Icon size={32} />
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
