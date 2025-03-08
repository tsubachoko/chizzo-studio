import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [
    { title: 'ちっぞう' },
    { name: 'description', content: 'ちっぞうの製作物一覧' },
  ]
}

const projects = [
  {
    title: '作成中...',
    description: '',
    href: '#',
  },
]

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="ちっぞうのロゴ"
              className="h-20 w-20"
            />
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
              ちっぞう
            </h1>
          </div>
        </header>

        <div className="flex flex-col items-center gap-8 w-full max-w-6xl">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            制作物一覧
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map(project => (
              <a
                key={project.title}
                href={project.href}
                className="group flex flex-col gap-4 rounded-lg border border-gray-200 p-6 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
