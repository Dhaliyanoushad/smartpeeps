const AttendanceList = ({ students }) => {
  return (
    <div className="p-6 bg-[#23333B] text-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Attendance List</h2>
      <ul className="space-y-3">
        {students.map((student, index) => (
          <li
            key={index}
            className="flex justify-between bg-[#5E503F] p-3 rounded-md shadow"
          >
            <span>{student.name}</span>
            <span
              className={student.present ? "text-green-400" : "text-red-400"}
            >
              {student.present ? "Present" : "Absent"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceList;
