// pages/jobs.tsx
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "jobs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const jobs: Job[] = JSON.parse(fileData);

  return {
    props: { jobs },
  };
}

export default function JobsPage({ jobs }: { jobs: Job[] }) {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Work Experience</h1>
    <div className="space-y-6">
      {jobs.map((job, idx) => (
        <div key={idx} className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">{job.role} @ {job.organization}</h3>
          <p className="text-sm text-gray-600">{job.period}</p>
          <p className="mt-2 text-sm">{job.description}</p>
        </div>
      ))}
    </div>
    </main>
  );
}
