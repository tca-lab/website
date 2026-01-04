import { Globe2, Package, TrendingUp } from "lucide-react"

export function CoreOperations() {
  const operations = [
    {
      icon: Globe2,
      title: "Küresel Tedarik Yönetimi",
      description: "Uluslararası üreticilerden yüksek kalite standartlarıyla seçkin ürünlerin tedarik edilmesi.",
    },
    {
      icon: Package,
      title: "Tedarik Zinciri Yönetimi",
      description: "Uçtan uca görünürlük ve kontrol ile verimli lojistik ve depolama çözümleri sağlanması.",
    },
    {
      icon: TrendingUp,
      title: "E-Ticaret Entegrasyonu",
      description: "Veri odaklı içgörülerle Türkiye pazarına stratejik giriş ve dağıtım planlaması.",
    },
  ]

  return (
    <section id="operations" className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-light text-[#333333] tracking-tight text-center mb-20 text-balance">
          Temel Faaliyetlerimiz
        </h2>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {operations.map((operation, index) => (
            <div
              key={index}
              className="bg-white p-10 lg:p-12 border border-[#E0E0E0] hover:shadow-sm transition-shadow"
            >
              <operation.icon className="h-10 w-10 text-[#333333] mb-6 stroke-[1.5]" />
              <h3 className="text-xl lg:text-2xl font-light text-[#333333] mb-4 tracking-tight">{operation.title}</h3>
              <p className="text-[#666666] leading-relaxed font-light">{operation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
