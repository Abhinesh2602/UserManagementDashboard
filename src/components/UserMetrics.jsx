export const UserMetrics = ({ usersLength }) => {
  return (
    <div className="w-full flex flex-row justify-between mt-8  ">
      <UserCard metricName={"Total Users"} metricNumber={usersLength} />
      <UserCard metricName={"Active Users"} metricNumber={"N/A"} />
      <UserCard metricName={"New Users"} metricNumber={"N/A"} />
      <UserCard metricName={"Pending Approvals"} metricNumber={"N/A"} />
    </div>
  );
};

const UserCard = ({ metricName, metricNumber }) => {
  return (
    <div className="w-[12.375rem] h-[5.6875rem] shadow-custom rounded-md flex flex-col items-start justify-center p-[1.25rem] bg-white">
      <span className="text-custom-grey text-[1.13rem] font-medium">
        {metricName}
      </span>
      <span className="font-bold text-lg text-custom-red">{metricNumber}</span>
    </div>
  );
};
