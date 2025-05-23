export function PageHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-[#F5F7FA] py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1C2235]">{title}</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">{description}</p>
        </div>
      </div>
    </div>
  )
}
