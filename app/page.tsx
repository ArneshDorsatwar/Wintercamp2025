import DaySection from '@/components/DaySection'
import ScrollAnimation from '@/components/ScrollAnimation'
import LoadingScreen from '@/components/LoadingScreen'
import HeroAnimation from '@/components/HeroAnimation'

// Schedule data for each day
const day1Schedule = [
  { time: '9:00 – 9:20', activity: 'Morning Yoga & Welcome' },
  { time: '9:20 – 10:50', activity: 'Introduction to Machine Learning' },
  { time: '11:00 – 12:00', activity: 'Lunch Break' },
  { time: '12:00 – 1:30', activity: 'Hands-on ML Model Training' },
  { time: '1:30 – 2:00', activity: 'Break & Snacks' },
  { time: '2:00 – 3:30', activity: 'Connecting ML to Web Projects' },
]

const day2Schedule = [
  { time: '9:00 – 9:20', activity: 'Morning Yoga' },
  { time: '9:20 – 10:50', activity: 'Coding Basics & AI Assistant and the basics of Prompt Engineering' },
  { time: '11:00 – 12:00', activity: 'Lunch Break' },
  { time: '12:00 – 1:30', activity: 'Building Interactive Games with Cursor and Claude Code' },
  { time: '1:30 – 2:00', activity: 'Break & Snacks' },
  { time: '2:00 – 3:30', activity: 'Creating Web-Based Games with Cursor and Claude Code' },
]

const day3Schedule = [
  { time: '9:00 – 9:20', activity: 'Morning Yoga' },
  { time: '9:20 – 10:50', activity: 'HTML & CSS Fundamentals & Hosting with Vercel and Netlify' },
  { time: '11:00 – 12:00', activity: 'Lunch Break' },
  { time: '12:00 – 1:30', activity: 'Building Personal Homepages with ai tools like Cursor Browerser and Lovable' },
  { time: '1:30 – 2:00', activity: 'Break & Snacks' },
  { time: '2:00 – 3:30', activity: 'Creating Multi-Page Websites with ai tools like Cursor Browerser and Lovable' },
]

const day4Schedule = [
  { time: '9:00 – 9:20', activity: 'Morning Yoga' },
  { time: '9:20 – 10:50', activity: 'AI Video Creation with Nano Banana & Sora' },
  { time: '11:00 – 12:00', activity: 'Lunch Break' },
  { time: '12:00 – 1:30', activity: 'Storyboarding & Prompt Writing for Videos' },
  { time: '1:30 – 2:00', activity: 'Break & Snacks' },
  { time: '2:00 – 3:30', activity: 'Building your own story with Nano Banana and Sora' },
]

const day5Schedule = [
  { time: '9:00 – 9:20', activity: 'Morning Yoga' },
  { time: '9:20 – 10:50', activity: 'Responsible AI Discussions' },
  { time: '11:00 – 12:00', activity: 'Lunch Break' },
  { time: '12:00 – 1:30', activity: 'Final Project Creation' },
  { time: '1:30 – 2:00', activity: 'Break & Snacks' },
  { time: '2:00 – 3:30', activity: 'Project Showcase & Celebration' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-winter-blue to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Animated Snowflakes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-winter-lightBlue opacity-40"
              style={{
                left: `${(i * 8.33) % 100}%`,
                fontSize: '1.2rem',
                animation: `snowfall ${10 + (i % 5)}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              ❄
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <HeroAnimation delay={0}>
            <div className="mb-6">
              <span className="text-6xl inline-block animate-bounce" style={{ animationDuration: '2s' }}>❄️</span>
            </div>
          </HeroAnimation>
          <HeroAnimation delay={100}>
            <h1 className="text-5xl md:text-6xl font-bold text-winter-darkBlue mb-4">
              Best Brains Phoenix North Winter Camp
            </h1>
          </HeroAnimation>
          <HeroAnimation delay={200}>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
              A 5-Day AI, Machine Learning & Creative Technology Camp for Kids
            </p>
          </HeroAnimation>
          <HeroAnimation delay={300}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Best Brains Winter Camp introduces students to artificial intelligence, 
              machine learning, coding, and creative AI tools in a fun, hands-on environment. 
              Over five days, students explore technology, creativity, and responsible AI use.
            </p>
          </HeroAnimation>
        </div>
      </section>

      {/* Pricing & Registration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-winter-blue">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-t-4 border-winter-darkBlue">
            <h2 className="text-3xl md:text-4xl font-bold text-winter-darkBlue mb-8 text-center">
              Camp Details & Registration
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Dates */}
              <div className="bg-winter-blue rounded-lg p-6">
                <h3 className="text-xl font-semibold text-winter-darkBlue mb-4 flex items-center">
                  <span className="text-2xl mr-2">📅</span>
                  Camp Dates
                </h3>
                <p className="text-lg text-gray-700 font-medium">
                  December 23, 26, 29, 30, 31
                </p>
                <p className="text-sm text-gray-600 mt-2">5 days of hands-on learning</p>
              </div>

              {/* Pricing */}
              <div className="bg-winter-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-winter-darkBlue mb-4 flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  Pricing
                </h3>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-winter-darkBlue">$75</span> per day
                  </p>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-winter-darkBlue">$299</span> full week
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Save $76 when you register for the full week!</p>
                </div>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-winter-blue rounded-lg p-6">
                <h3 className="text-xl font-semibold text-winter-darkBlue mb-4 flex items-center">
                  <span className="text-2xl mr-2">📍</span>
                  Location
                </h3>
                <p className="text-gray-700 font-medium mb-1">Best Brains Phoenix North</p>
                <a
                  href="https://maps.google.com/?q=20350+N+Cave+Creek+Rd+%23100,+Phoenix,+AZ+85050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-winter-darkBlue hover:underline transition-colors"
                >
                  <p>20350 N Cave Creek Rd #100</p>
                  <p>Phoenix, AZ 85050</p>
                </a>
                <a
                  href="https://maps.google.com/?q=20350+N+Cave+Creek+Rd+%23100,+Phoenix,+AZ+85050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-winter-darkBlue text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  🗺️ Get Directions
                </a>
              </div>

              <div className="bg-winter-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-winter-darkBlue mb-4 flex items-center">
                  <span className="text-2xl mr-2">📞</span>
                  Contact
                </h3>
                <p className="text-lg text-gray-700 font-medium">
                  <a href="tel:480-943-5000" className="text-winter-darkBlue hover:underline">
                    480-943-5000
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">Call to register or ask questions</p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-winter-blue rounded-lg p-6">
              <h3 className="text-xl font-semibold text-winter-darkBlue mb-4 flex items-center">
                <span className="text-2xl mr-2">📋</span>
                What to Bring
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💻</span>
                  <p className="text-gray-700">Bring your own computer</p>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🍱</span>
                  <p className="text-gray-700">Bring your own lunch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-winter-darkBlue mb-8 text-center">
            What Kids Will Learn
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Introduction to Machine Learning',
              'Coding with AI assistance',
              'Web development basics',
              'AI video creation tools',
              'Responsible and ethical AI use',
              'Creativity, collaboration, and problem-solving',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-winter-blue rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3">✨</span>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-winter-gray">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-winter-darkBlue mb-12 text-center">
              Daily Schedule
            </h2>
          </ScrollAnimation>

          <DaySection
            dayNumber={1}
            title="Machine Learning Foundations"
            schedule={day1Schedule}
            concepts={[
              'What is Machine Learning?',
              'Data, labels, and patterns',
              'Training and testing models',
              'Using ML in simple web projects',
            ]}
            activities={[
              'Train a basic ML model using images or gestures',
              'Connect a model to a simple website',
            ]}
          />

          <DaySection
            dayNumber={2}
            title="Coding With AI Tools"
            schedule={day2Schedule}
            concepts={[
              'Coding basics (variables, logic, loops)',
              'Using AI coding assistants',
              'Building interactive programs',
            ]}
            activities={[
              'Build a simple game using AI assistance',
              'Create a fun web-based app',
            ]}
          />

          <DaySection
            dayNumber={3}
            title="Web Development"
            schedule={day3Schedule}
            concepts={[
              'What websites are made of',
              'HTML, CSS basics, hosting with Vercel and Netlify',
              'Page layout and design with ai tools like Cursor Browerser and Lovable',
            ]}
            activities={[
              'Build a personal homepage',
              ' Discuss about how to create multi-page websites',
            ]}
          />

          <DaySection
            dayNumber={4}
            title="AI Video Creation"
            schedule={day4Schedule}
            concepts={[
              'AI video generation with Nano Banna',
              'Creating videos with Sora',
              'Prompt writing for video generation',
              'Storyboarding techniques',
              'AI-generated video workflows',
            ]}
            activities={[
              'Create short AI videos using Nano Banna',
              'Generate videos with Sora',
              'Build a video gallery website',
              'Combine multiple AI video tools',
            ]}
          />

          <DaySection
            dayNumber={5}
            title="Responsible AI + Final Projects"
            schedule={day5Schedule}
            concepts={[
              'Safe and ethical AI use',
              'Privacy and data awareness',
              'Bias and fairness',
              'Creative problem-solving',
            ]}
            activities={[
              'Responsible AI discussions',
              'Final project creation and showcase',
            ]}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-winter-darkBlue text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Best Brains Winter Camp</h3>
          <p className="text-winter-lightBlue mb-2">Winter 2025</p>
          <p className="text-lg italic mt-6 text-winter-blue">
            Learning today. Creating tomorrow.
          </p>
        </div>
      </footer>
    </main>
  )
}

