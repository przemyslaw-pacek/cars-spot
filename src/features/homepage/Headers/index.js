export const Headers = ({ activeTab, setActiveTab }) => (
  <section
    className="
      mx-[22px]
      sm:mx-[44px]
      xl:mx-[88px]
      mt-[20px]
      sm:mt-[40px]
      xl:mt-[80px]"
    id="gallery"
  >
    <div className="font-robotoCond text-[#0147FF] text-[21.5px] leading-8">
      Prezentacja firmy
    </div>
    <h2
      className="
        text-[28px] 
        sm:text-[36px] 
        xl:text-[40px] 
        leading-[34px] 
        sm:leading-[40px] 
        xl:leading-[48px] 
        mb-2 
        sm:mb-3 
        xl:mb-6"
    >
      Zobacz naszą galerię zdjęć
    </h2>
    <div
      className="
        font-robotoFlex 
        font-semibold 
        text-[15px] 
        tracking-[-0.02em] 
        leading-[23px] 
        flex 
        flex-wrap 
        gap-6 
        sm:gap-8 
        xl:gap-12 
        gap-y-1"
    >
      <button
        onClick={() => setActiveTab("osobowe")}
        className={`
          ${
            activeTab === "osobowe"
              ? "border-b border-[#0147FF] text-[#0147FF]"
              : ""
          }`}
      >
        Samochody osobowe
      </button>
      <button
        onClick={() => setActiveTab("dostawcze")}
        className={`
          ${
            activeTab === "dostawcze"
              ? "border-b border-[#0147FF] text-[#0147FF]"
              : ""
          }`}
      >
        Samochody dostawcze
      </button>
    </div>
  </section>
);
