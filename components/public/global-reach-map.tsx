export function GlobalReachMap() {
  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Our Global Reach</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Helping students from around the world achieve their academic dreams in the U.S.
          </p>
        </div>

        <div className="relative aspect-[16/9] bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=600&width=1200&query=world%20map%20with%20connection%20points"
              alt="Global reach map"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[#1C2235]/5" />

          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#1C2235]">40+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#1C2235]">200+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#1C2235]">50+</div>
              <div className="text-sm text-muted-foreground">Universities</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#1C2235]">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          <p>
            Our students come from diverse backgrounds across Asia, Africa, Europe, South America, and the Middle East.
          </p>
        </div>
      </div>
    </section>
  )
}
