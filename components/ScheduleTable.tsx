interface ScheduleItem {
  time: string
  activity: string
}

interface ScheduleTableProps {
  schedule: ScheduleItem[]
}

export default function ScheduleTable({ schedule }: ScheduleTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-winter-darkBlue text-white">
            <th className="px-6 py-4 text-left font-semibold text-lg">Time</th>
            <th className="px-6 py-4 text-left font-semibold text-lg">Activity</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-winter-blue'
              } hover:bg-winter-lightBlue transition-colors`}
            >
              <td className="px-6 py-4 font-medium text-winter-darkGray">
                {item.time}
              </td>
              <td className="px-6 py-4 text-gray-800">{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

