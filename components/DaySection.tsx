import ScheduleTable from './ScheduleTable'
import ScrollAnimation from './ScrollAnimation'

interface ScheduleItem {
  time: string
  activity: string
}

interface DaySectionProps {
  dayNumber: number
  title: string
  schedule: ScheduleItem[]
  concepts: string[]
  activities: string[]
}

export default function DaySection({
  dayNumber,
  title,
  schedule,
  concepts,
  activities,
}: DaySectionProps) {
  return (
    <section className="mb-16 scroll-mt-20" id={`day-${dayNumber}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation delay={dayNumber * 100}>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-winter-darkBlue">
            <h2 className="text-4xl font-bold text-winter-darkBlue mb-2">
              Day {dayNumber} — {title}
            </h2>
            
            <ScrollAnimation delay={100}>
              <div className="mt-8 mb-6">
                <ScheduleTable schedule={schedule} />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-winter-blue rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-winter-darkBlue mb-4">
                    Concepts Covered
                  </h3>
                  <ul className="space-y-2">
                    {concepts.map((concept, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-winter-darkBlue mr-2">•</span>
                        <span className="text-gray-700">{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-winter-gray rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-winter-darkBlue mb-4">
                    Activities
                  </h3>
                  <ul className="space-y-2">
                    {activities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-winter-darkBlue mr-2">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

