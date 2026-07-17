import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      data-testid="site-footer"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono uppercase text-[10px] tracking-[0.25em] text-[#A1A1AA]">
        <span>© {new Date().getFullYear()} · {PROFILE.name}</span>
        <span>Designed & built in Ahmedabad · Vol.01</span>
        <a
          href="#top"
          data-testid="footer-back-to-top"
          className="link-underline text-[#F2F2F2]"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
