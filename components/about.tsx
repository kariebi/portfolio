export default function About() {
  const START_YEAR = 2021;
  const yearsOfExperience = new Date().getFullYear() - START_YEAR;
  
  return (
    <section id="about">
      <h2 className="text-xl font-semibold mb-3">About</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        Full-stack engineer with {yearsOfExperience}+ years of experience building production web
        and mobile applications across hospitality, fintech, education, real
        estate, and Web3-focused products. I am comfortable owning work from
        product UI through API integration, realtime systems, and deployment,
        with recent delivery across Execufy, Musigwe Labs, Codetratives, and
        Abinci.ng.
      </p>
    </section>
  );
}
