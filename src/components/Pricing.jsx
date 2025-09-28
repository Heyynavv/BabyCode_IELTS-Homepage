export default function Pricing() {
  const plans = [
    { name: "Basic", price: "$29/mo", features: ["Speaking Practice", "Writing Tasks"] },
    { name: "Pro", price: "$49/mo", features: ["All Basic Features", "Mock Tests", "Personal Feedback"] },
    { name: "Premium", price: "$79/mo", features: ["All Pro Features", "1-on-1 Coaching", "Band Analysis"] },
  ];

  return (
    <section id="pricing" className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        {plans.map((plan, idx) => (
          <div key={idx} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button className="primary-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}
