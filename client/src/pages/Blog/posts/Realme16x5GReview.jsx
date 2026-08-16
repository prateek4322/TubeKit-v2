import { Link } from "react-router-dom";

function RgybHeading({ number, children }) {
  return (
    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
      {number && (
        <span className="mr-2 text-red-400">
          {number}
        </span>
      )}

      <span className="text-yellow-300">
        {children}
      </span>
    </h2>
  );
}

function Realme16x5GReview() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            Smartphone Review
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Realme 16x 5G Review: Price, Specifications, Pros & Cons
          </h1>

          <p className="mt-5">
            The Realme 16x 5G is the latest addition to Realme's 16-series
            lineup in India, targeting buyers who want 5G connectivity,
            a large battery and a high-refresh-rate display.
          </p>

          <p className="mt-4">
            The phone stands out mainly because of its 7,000mAh battery,
            144Hz display and IP65-rated protection. However, the
            MediaTek Dimensity 6300 and HD+ LCD panel show that Realme
            has made some compromises to keep the phone positioned below
            its more premium 16-series models.
          </p>

          <p className="mt-4">
            In this detailed Realme 16x 5G review, we look at its price,
            display, performance, cameras, battery, software, connectivity,
            advantages, disadvantages and who should actually buy it.
          </p>

        </div>
      </section>


      {/* =====================================================
          QUICK VERDICT
      ====================================================== */}

      <section>
        <RgybHeading>
          Realme 16x 5G Quick Verdict
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["Battery", "Excellent", "7,000mAh"],
            ["Display", "Good", "144Hz LCD"],
            ["Performance", "Average", "Dimensity 6300"],
            ["Camera", "Decent", "50MP + 8MP"],
          ].map(([title, rating, detail]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm text-slate-500">
                {title}
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {rating}
              </h3>

              <p className="mt-1 text-sm text-blue-400">
                {detail}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

          <p className="font-semibold text-green-400">
            Our Verdict
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            The Realme 16x 5G makes the most sense for users who prioritize
            battery life, a smooth 144Hz experience and basic everyday
            performance. It is less convincing for buyers who prioritize
            AMOLED display quality, gaming performance or advanced cameras.
          </p>

        </div>
      </section>


      {/* =====================================================
          PRICE
      ====================================================== */}

      <section>
        <RgybHeading number="1.">
          Realme 16x 5G Price in India
        </RgybHeading>

        <p className="mt-5">
          The Realme 16x 5G was launched in India in three configurations.
          The starting variant comes with 4GB RAM and 128GB storage,
          while higher variants offer 6GB RAM and up to 256GB storage.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">

          <div className="grid grid-cols-3 bg-white/[0.05] p-4 font-semibold text-white">
            <span>Variant</span>
            <span>Storage</span>
            <span>Launch Price</span>
          </div>

          {[
            ["4GB RAM", "128GB", "₹25,999"],
            ["6GB RAM", "128GB", "₹27,999"],
            ["6GB RAM", "256GB", "₹30,999"],
          ].map(([ram, storage, price]) => (
            <div
              key={`${ram}-${storage}`}
              className="grid grid-cols-3 border-t border-white/10 p-4 text-sm"
            >
              <span className="text-slate-300">
                {ram}
              </span>

              <span className="text-slate-400">
                {storage}
              </span>

              <span className="font-semibold text-green-400">
                {price}
              </span>
            </div>
          ))}

        </div>

        <p className="mt-5">
          Launch offers have also been reported, including a ₹2,000
          discount and an exchange bonus of up to ₹3,000, along with
          no-cost EMI options. Offers can change, so buyers should check
          the current selling price before purchasing.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <p className="font-semibold text-yellow-300">
            Price Reality
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            The Realme 16x 5G is considerably more expensive than some
            pre-launch reports suggested. Those older reports listed
            prices around ₹18,000, but they were based on leaks and should
            not be used for the current India price.
          </p>

        </div>
      </section>


      {/* =====================================================
          DESIGN
      ====================================================== */}

      <section>
        <RgybHeading number="2.">
          Design and Build Quality
        </RgybHeading>

        <p className="mt-5">
          Realme has positioned the 16x 5G as a practical smartphone rather
          than a premium flagship-style device. The phone is available in
          Endurance Brown and Glory White colour options according to
          launch reports.
        </p>

        <p className="mt-4">
          One of the more useful additions is the SGS-certified
          drop-resistant construction, while the IP65 rating provides
          protection against dust and water jets.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            ["IP65", "Dust and water resistance"],
            ["SGS", "Drop-resistance certification"],
            ["5G", "Modern mobile connectivity"],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5"
            >
              <h3 className="font-bold text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {description}
              </p>
            </div>
          ))}

        </div>

        <p className="mt-5 text-sm text-slate-500">
          Note: IP65 does not mean the phone is designed for underwater
          use. It is protection against dust and water jets, not a
          guarantee of waterproof operation.
        </p>
      </section>


      {/* =====================================================
          DISPLAY
      ====================================================== */}

      <section>
        <RgybHeading number="3.">
          Realme 16x 5G Display Review
        </RgybHeading>

        <p className="mt-5">
          The Realme 16x 5G comes with a large 6.8-inch LCD display with
          a 144Hz refresh rate and reported peak brightness of up to
          1,200 nits.
        </p>

        <p className="mt-4">
          The 144Hz refresh rate is one of the phone's biggest strengths
          for scrolling, social media and general navigation. The display
          also supports Rain Touch technology, which is useful when the
          screen is being used with wet fingers.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              What We Like
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>✓ Large 6.8-inch screen</li>
              <li>✓ Smooth 144Hz refresh rate</li>
              <li>✓ Up to 1,200 nits brightness</li>
              <li>✓ Rain Touch support</li>
            </ul>

          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

            <h3 className="font-semibold text-red-400">
              What We Don't Like
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>✗ LCD instead of AMOLED</li>
              <li>✗ HD+ resolution</li>
              <li>✗ Less impressive than premium 16-series displays</li>
            </ul>

          </div>

        </div>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <p className="font-semibold text-yellow-300">
            Display Verdict
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            If smoothness is your priority, the 144Hz refresh rate is
            attractive. But buyers expecting an AMOLED-level viewing
            experience should know that this is an LCD panel.
          </p>

        </div>
      </section>


      {/* =====================================================
          PERFORMANCE
      ====================================================== */}

      <section>
        <RgybHeading number="4.">
          Performance and Gaming
        </RgybHeading>

        <p className="mt-5">
          The phone is powered by the MediaTek Dimensity 6300 chipset.
          This is a mainstream 5G processor designed primarily for
          everyday smartphone usage rather than high-end gaming.
        </p>

        <p className="mt-4">
          For activities such as WhatsApp, Instagram, YouTube, browsing,
          calling, UPI applications and normal multitasking, the chipset
          should be adequate.
        </p>

        <p className="mt-4">
          However, buyers looking for consistently high frame rates in
          demanding games should consider more performance-focused
          alternatives.
        </p>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

          <p className="font-semibold text-red-400">
            Gaming Warning
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Do not buy the Realme 16x 5G primarily as a gaming phone.
            Its biggest selling points are battery life and everyday
            usability, not flagship-level gaming performance.
          </p>

        </div>
      </section>


      {/* =====================================================
          CAMERA
      ====================================================== */}

      <section>
        <RgybHeading number="5.">
          Realme 16x 5G Camera Review
        </RgybHeading>

        <p className="mt-5">
          The Realme 16x 5G features a 50MP AI rear camera and an 8MP
          front camera according to current launch information.
        </p>

        <p className="mt-4">
          On paper, the 50MP primary camera should be capable of producing
          useful daylight photographs for social media and everyday
          photography. The AI features are intended to assist with image
          processing.
        </p>

        <p className="mt-4">
          However, the camera setup is not aimed at enthusiasts looking
          for a versatile multi-camera system or flagship-level photography.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              Camera Pros
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>✓ 50MP primary rear camera</li>
              <li>✓ AI camera features</li>
              <li>✓ 8MP selfie camera</li>
              <li>✓ Suitable for everyday social media photos</li>
            </ul>

          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

            <h3 className="font-semibold text-red-400">
              Camera Cons
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>✗ Not a camera-centric phone</li>
              <li>✗ No premium multi-camera experience</li>
              <li>✗ Low-light performance needs real-world testing</li>
            </ul>

          </div>

        </div>

        <p className="mt-5 text-sm text-slate-500">
          Because the 16x 5G is a newly launched device, independent
          long-term camera testing is still limited. We therefore do not
          claim specific low-light or video results without verified
          hands-on testing.
        </p>
      </section>


      {/* =====================================================
          BATTERY
      ====================================================== */}

      <section>
        <RgybHeading number="6.">
          7,000mAh Battery and Charging
        </RgybHeading>

        <p className="mt-5">
          Battery life is easily the biggest highlight of the Realme 16x
          5G. The phone packs a 7,000mAh battery, which is considerably
          larger than what many mainstream smartphones offer.
        </p>

        <p className="mt-4">
          It also supports 45W fast charging and 6.5W reverse charging.
          Reverse charging can be useful when you need to provide emergency
          power to accessories or another device.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            ["7,000mAh", "Large battery"],
            ["45W", "Fast charging"],
            ["6.5W", "Reverse charging"],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 text-center"
            >
              <div className="text-2xl font-black text-green-400">
                {title}
              </div>

              <p className="mt-2 text-sm text-slate-400">
                {description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

          <p className="font-semibold text-green-400">
            Battery Verdict
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            For students, commuters, delivery workers and users who spend
            long hours away from a charger, the 7,000mAh battery is one of
            the strongest reasons to consider this phone.
          </p>

        </div>
      </section>


      {/* =====================================================
          SOFTWARE
      ====================================================== */}

      <section>
        <RgybHeading number="7.">
          Software and Updates
        </RgybHeading>

        <p className="mt-5">
          The Realme 16x 5G runs Android 16 with Realme UI 6 according to
          current launch reports.
        </p>

        <p className="mt-4">
          Realme has also stated that the device will receive two Android
          OS upgrades and three years of security updates.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <h3 className="font-semibold text-white">
            Software Support
          </h3>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">

            <div>
              <p className="text-sm text-slate-500">
                Operating System
              </p>

              <p className="font-semibold text-blue-400">
                Android 16
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                User Interface
              </p>

              <p className="font-semibold text-blue-400">
                Realme UI 6
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                OS Upgrades
              </p>

              <p className="font-semibold text-blue-400">
                2
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Security Updates
              </p>

              <p className="font-semibold text-blue-400">
                3 Years
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONNECTIVITY
      ====================================================== */}

      <section>
        <RgybHeading number="8.">
          5G and Connectivity
        </RgybHeading>

        <p className="mt-5">
          As the name suggests, the Realme 16x 5G supports 5G connectivity,
          making it suitable for users who want a future-ready mobile
          network experience.
        </p>

        <p className="mt-4">
          The phone is aimed at users who want a combination of 5G,
          large battery capacity and everyday connectivity rather than
          advanced flagship hardware.
        </p>
      </section>


      {/* =====================================================
          PROS
      ====================================================== */}

      <section>
        <RgybHeading>
          Realme 16x 5G Pros — Advantages
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Large 7,000mAh battery.",
            "144Hz refresh rate for smooth scrolling.",
            "45W fast charging.",
            "6.5W reverse charging.",
            "5G connectivity.",
            "IP65 dust and water resistance.",
            "SGS-certified drop-resistant construction.",
            "Android 16 and Realme UI 6.",
            "Three RAM/storage configurations.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-green-500/20 bg-green-500/5 p-4"
            >
              <span className="mr-2 font-bold text-green-400">
                ✓
              </span>

              {item}
            </div>
          ))}

        </div>
      </section>


      {/* =====================================================
          CONS
      ====================================================== */}

      <section>
        <RgybHeading>
          Realme 16x 5G Cons — Disadvantages
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "HD+ LCD display instead of AMOLED.",
            "Dimensity 6300 is not aimed at heavy gaming.",
            "Camera system is relatively basic.",
            "4GB RAM base variant is not ideal for long-term heavy multitasking.",
            "45W charging is reasonable but not class-leading.",
            "Price makes the phone harder to recommend purely for performance.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-red-500/20 bg-red-500/5 p-4"
            >
              <span className="mr-2 font-bold text-red-400">
                ✗
              </span>

              {item}
            </div>
          ))}

        </div>
      </section>


      {/* =====================================================
          WHO SHOULD BUY
      ====================================================== */}

      <section>
        <RgybHeading>
          Who Should Buy the Realme 16x 5G?
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              Buy It If You Want
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>✓ Very large battery capacity.</li>
              <li>✓ Smooth 144Hz display experience.</li>
              <li>✓ 5G connectivity.</li>
              <li>✓ Basic everyday performance.</li>
              <li>✓ Better durability features.</li>
            </ul>

          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

            <h3 className="font-semibold text-red-400">
              Skip It If You Want
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>✗ AMOLED display.</li>
              <li>✗ High-end gaming performance.</li>
              <li>✗ Advanced camera hardware.</li>
              <li>✗ Very fast charging.</li>
              <li>✗ Maximum performance for the money.</li>
            </ul>

          </div>

        </div>
      </section>


      {/* =====================================================
          BUYING VERDICT
      ====================================================== */}

      <section>
        <RgybHeading>
          Is Realme 16x 5G Worth Buying?
        </RgybHeading>

        <p className="mt-5">
          The answer depends heavily on your priorities.
        </p>

        <p className="mt-4">
          If your biggest requirement is battery life, the 7,000mAh cell
          gives the Realme 16x 5G a clear identity. The 144Hz refresh rate,
          5G support and durability features also make it a practical
          everyday smartphone.
        </p>

        <p className="mt-4">
          On the other hand, the HD+ LCD display and Dimensity 6300
          processor are difficult to overlook at the phone's launch price.
          Users who prioritize gaming, display quality or camera versatility
          should compare other phones before buying.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <p className="font-semibold text-yellow-300">
            Our Buying Advice
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            The 6GB + 256GB variant is the more sensible configuration if
            you plan to keep the phone for several years, provided the
            price difference fits your budget. The 4GB variant is better
            suited to light users who want to spend less.
          </p>

        </div>
      </section>


      {/* =====================================================
          SCORE
      ====================================================== */}

      <section>
        <RgybHeading>
          Realme 16x 5G Rating
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {[
            ["Design", "7.5/10"],
            ["Display", "7/10"],
            ["Performance", "6.5/10"],
            ["Camera", "6.5/10"],
            ["Battery", "9/10"],
          ].map(([category, score]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <p className="text-sm text-slate-500">
                {category}
              </p>

              <p className="mt-2 text-2xl font-black text-white">
                {score}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 text-center">

          <p className="text-sm uppercase tracking-wider text-blue-400">
            Overall
          </p>

          <p className="mt-2 text-4xl font-black text-white">
            7.2/10
          </p>

          <p className="mt-3 text-sm text-slate-400">
            A battery-focused 5G phone with a smooth display, but with
            clear compromises in display resolution, performance and camera
            versatility.
          </p>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}

      <section>
        <RgybHeading>
          Realme 16x 5G Frequently Asked Questions
        </RgybHeading>

        <div className="mt-6 space-y-5">

          {[
            [
              "What is the Realme 16x 5G price in India?",
              "The Realme 16x 5G starts at ₹25,999 for the 4GB RAM and 128GB storage variant. Higher variants are priced at ₹27,999 and ₹30,999 according to current launch reports.",
            ],
            [
              "Does Realme 16x 5G support 5G?",
              "Yes. The Realme 16x 5G supports 5G connectivity along with standard mobile network connectivity.",
            ],
            [
              "What is the battery capacity of Realme 16x 5G?",
              "The Realme 16x 5G has a large 7,000mAh battery with support for 45W fast charging and 6.5W reverse charging.",
            ],
            [
              "What processor does Realme 16x 5G use?",
              "The phone uses the MediaTek Dimensity 6300 chipset.",
            ],
            [
              "Does Realme 16x 5G have an AMOLED display?",
              "No. The Realme 16x 5G uses a 6.8-inch HD+ LCD display with a 144Hz refresh rate.",
            ],
            [
              "Is Realme 16x 5G good for gaming?",
              "It should handle everyday gaming, but the Dimensity 6300 is not designed to compete with higher-performance gaming chipsets. Heavy gamers should consider alternatives.",
            ],
            [
              "How many Android updates will Realme 16x 5G get?",
              "Current launch reports state that Realme promises two OS upgrades and three years of security updates.",
            ],
            [
              "Is Realme 16x 5G worth buying?",
              "It can be a good choice for users who prioritize battery life, 5G and a smooth 144Hz experience. Buyers who prioritize AMOLED displays, gaming or advanced cameras should compare alternatives.",
            ],
          ].map(([question, answer]) => (
            <div
              key={question}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {question}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {answer}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Final Verdict: Should You Buy Realme 16x 5G?
          </h2>

          <p className="mt-4 text-slate-400">
            The Realme 16x 5G is primarily a battery-focused 5G smartphone.
            Its 7,000mAh battery, 144Hz display, IP65 protection and
            everyday-focused hardware make it practical, but the LCD
            resolution and Dimensity 6300 performance limit its appeal
            for demanding users.
          </p>

          <p className="mt-4 text-slate-400">
            If long battery life matters more to you than gaming,
            AMOLED quality or advanced photography, the Realme 16x 5G
            deserves a place on your shortlist.
          </p>

        </div>
      </section>

    </article>
  );
}

export default Realme16x5GReview;