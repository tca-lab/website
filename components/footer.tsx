export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E0E0E0] py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#666666] text-sm font-light">
            © {new Date().getFullYear()} GlobalBridge. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#666666] hover:text-[#333333] transition-colors text-sm font-light">
              LinkedIn
            </a>
            <a href="#" className="text-[#666666] hover:text-[#333333] transition-colors text-sm font-light">
              Twitter
            </a>
            <a href="#" className="text-[#666666] hover:text-[#333333] transition-colors text-sm font-light">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
