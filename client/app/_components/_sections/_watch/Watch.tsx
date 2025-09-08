import "./Watch.module.css"

export default function Watch() {
  return (
    <section className="section" id="watch-section">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/347188728?badge=0&autopause=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          title="Walk In My Shoes Media - VR Diversity & Inclusion Training Promo"
        />
      </div>
    </section>
  );
}
