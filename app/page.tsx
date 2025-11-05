'use client';

import { useState, useMemo } from 'react';
import { Search, TrendingUp, Award, Users } from 'lucide-react';

interface AITalent {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  yearsExperience: string;
  specialization: string[];
  education: string;
  publications: number;
  githubStars: number;
  linkedinUrl: string;
  recentWork: string;
}

const talentData: AITalent[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Machine Learning Research Engineer",
    company: "Anthropic",
    location: "San Francisco, CA",
    yearsExperience: "2-3 years",
    specialization: ["LLM Safety", "Reinforcement Learning", "Constitutional AI"],
    education: "PhD in Computer Science - Stanford",
    publications: 8,
    githubStars: 2400,
    linkedinUrl: "https://linkedin.com/in/sarah-chen-ai",
    recentWork: "Published research on RLHF improvements and model alignment"
  },
  {
    id: 2,
    name: "Alex Kumar",
    title: "AI Research Scientist",
    company: "Google DeepMind",
    location: "London, UK",
    yearsExperience: "3-4 years",
    specialization: ["Computer Vision", "Multimodal Learning", "Generative Models"],
    education: "PhD in AI - MIT",
    publications: 12,
    githubStars: 3800,
    linkedinUrl: "https://linkedin.com/in/alex-kumar-research",
    recentWork: "Led breakthrough work on efficient video generation models"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "NLP Research Engineer",
    company: "OpenAI",
    location: "New York, NY",
    yearsExperience: "2-3 years",
    specialization: ["Natural Language Processing", "Prompt Engineering", "Fine-tuning"],
    education: "MS in Computer Science - Carnegie Mellon",
    publications: 6,
    githubStars: 1900,
    linkedinUrl: "https://linkedin.com/in/maria-rodriguez-nlp",
    recentWork: "Developed novel techniques for zero-shot prompt optimization"
  },
  {
    id: 4,
    name: "James Park",
    title: "Machine Learning Engineer",
    company: "Meta AI",
    location: "Seattle, WA",
    yearsExperience: "3-4 years",
    specialization: ["Recommendation Systems", "Deep Learning", "Graph Neural Networks"],
    education: "PhD in Machine Learning - Berkeley",
    publications: 10,
    githubStars: 4200,
    linkedinUrl: "https://linkedin.com/in/james-park-ml",
    recentWork: "Architected next-gen recommendation engine serving 2B+ users"
  },
  {
    id: 5,
    name: "Priya Sharma",
    title: "AI Research Scientist",
    company: "Cohere",
    location: "Toronto, Canada",
    yearsExperience: "2-3 years",
    specialization: ["Retrieval-Augmented Generation", "Embeddings", "Semantic Search"],
    education: "PhD in NLP - University of Toronto",
    publications: 9,
    githubStars: 2100,
    linkedinUrl: "https://linkedin.com/in/priya-sharma-ai",
    recentWork: "Created state-of-the-art embedding models for enterprise search"
  },
  {
    id: 6,
    name: "David Nguyen",
    title: "ML Research Engineer",
    company: "Hugging Face",
    location: "Paris, France",
    yearsExperience: "3-4 years",
    specialization: ["Model Optimization", "Transformers", "Open Source AI"],
    education: "MS in AI - ETH Zurich",
    publications: 7,
    githubStars: 8900,
    linkedinUrl: "https://linkedin.com/in/david-nguyen-ml",
    recentWork: "Contributed to major open-source transformer libraries"
  },
  {
    id: 7,
    name: "Emily Johnson",
    title: "AI Safety Researcher",
    company: "Anthropic",
    location: "Remote",
    yearsExperience: "2-3 years",
    specialization: ["AI Alignment", "Interpretability", "Red Teaming"],
    education: "PhD in Philosophy & CS - Oxford",
    publications: 11,
    githubStars: 1600,
    linkedinUrl: "https://linkedin.com/in/emily-johnson-safety",
    recentWork: "Leading research on mechanistic interpretability of LLMs"
  },
  {
    id: 8,
    name: "Hassan Ali",
    title: "Machine Learning Researcher",
    company: "Stability AI",
    location: "Dubai, UAE",
    yearsExperience: "3-4 years",
    specialization: ["Diffusion Models", "Image Generation", "3D Synthesis"],
    education: "PhD in Computer Vision - Cambridge",
    publications: 14,
    githubStars: 5600,
    linkedinUrl: "https://linkedin.com/in/hassan-ali-vision",
    recentWork: "Pioneered efficient latent diffusion architectures"
  },
  {
    id: 9,
    name: "Lisa Wang",
    title: "AI Research Engineer",
    company: "Scale AI",
    location: "San Francisco, CA",
    yearsExperience: "2-3 years",
    specialization: ["Data Curation", "Model Evaluation", "Active Learning"],
    education: "MS in Machine Learning - Stanford",
    publications: 5,
    githubStars: 1400,
    linkedinUrl: "https://linkedin.com/in/lisa-wang-scale",
    recentWork: "Built frameworks for automated model quality assessment"
  },
  {
    id: 10,
    name: "Marcus Thompson",
    title: "NLP Research Scientist",
    company: "AI21 Labs",
    location: "Tel Aviv, Israel",
    yearsExperience: "3-4 years",
    specialization: ["Language Models", "Reasoning", "Knowledge Graphs"],
    education: "PhD in Linguistics & CS - MIT",
    publications: 13,
    githubStars: 2800,
    linkedinUrl: "https://linkedin.com/in/marcus-thompson-nlp",
    recentWork: "Developed novel approaches to reasoning in language models"
  },
  {
    id: 11,
    name: "Yuki Tanaka",
    title: "ML Infrastructure Engineer",
    company: "Midjourney",
    location: "Tokyo, Japan",
    yearsExperience: "3-4 years",
    specialization: ["MLOps", "Distributed Training", "Model Serving"],
    education: "MS in Computer Science - Tokyo University",
    publications: 4,
    githubStars: 3200,
    linkedinUrl: "https://linkedin.com/in/yuki-tanaka-mlops",
    recentWork: "Scaled inference infrastructure to 15M+ daily generations"
  },
  {
    id: 12,
    name: "Aisha Patel",
    title: "AI Research Scientist",
    company: "Google Brain",
    location: "Mountain View, CA",
    yearsExperience: "2-3 years",
    specialization: ["AutoML", "Neural Architecture Search", "Efficient AI"],
    education: "PhD in Machine Learning - Stanford",
    publications: 10,
    githubStars: 2600,
    linkedinUrl: "https://linkedin.com/in/aisha-patel-brain",
    recentWork: "Automated discovery of efficient transformer variants"
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialization, setFilterSpecialization] = useState('All');
  const [sortBy, setSortBy] = useState<'publications' | 'githubStars'>('publications');

  const allSpecializations = useMemo(() => {
    const specs = new Set<string>();
    talentData.forEach(talent => {
      talent.specialization.forEach(spec => specs.add(spec));
    });
    return ['All', ...Array.from(specs).sort()];
  }, []);

  const filteredAndSortedData = useMemo(() => {
    let filtered = talentData.filter(talent => {
      const matchesSearch =
        talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        talent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        talent.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        talent.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesSpecialization =
        filterSpecialization === 'All' ||
        talent.specialization.includes(filterSpecialization);

      return matchesSearch && matchesSpecialization;
    });

    return filtered.sort((a, b) => b[sortBy] - a[sortBy]);
  }, [searchTerm, filterSpecialization, sortBy]);

  const stats = useMemo(() => ({
    totalTalent: talentData.length,
    avgPublications: Math.round(talentData.reduce((acc, t) => acc + t.publications, 0) / talentData.length),
    totalGithubStars: talentData.reduce((acc, t) => acc + t.githubStars, 0),
    topCompanies: ['Anthropic', 'OpenAI', 'Google DeepMind', 'Meta AI']
  }), []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <TrendingUp className="w-10 h-10" />
            AI Talent Finder
          </h1>
          <p className="text-blue-100 text-lg">
            Discover emerging AI engineers and researchers shaping the future
          </p>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{stats.totalTalent}</div>
              <div className="text-sm text-gray-600">Top Talents</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{stats.avgPublications}</div>
              <div className="text-sm text-gray-600">Avg Publications</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{(stats.totalGithubStars / 1000).toFixed(1)}K</div>
              <div className="text-sm text-gray-600">GitHub Stars</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Search className="w-8 h-8 text-orange-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{filteredAndSortedData.length}</div>
              <div className="text-sm text-gray-600">Results Found</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, company, or skill..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization
              </label>
              <select
                value={filterSpecialization}
                onChange={(e) => setFilterSpecialization(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {allSpecializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'publications' | 'githubStars')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="publications">Publications</option>
                <option value="githubStars">GitHub Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name & Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Company & Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Specialization
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Education
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Publications
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    GitHub ⭐
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Recent Work
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Profile
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAndSortedData.map((talent) => (
                  <tr key={talent.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-900">{talent.name}</div>
                        <div className="text-sm text-gray-600">{talent.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{talent.yearsExperience}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">{talent.company}</div>
                        <div className="text-sm text-gray-600">{talent.location}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {talent.specialization.map((spec, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{talent.education}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center justify-center px-3 py-1 bg-purple-100 text-purple-800 font-semibold rounded-full">
                        {talent.publications}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center justify-center px-3 py-1 bg-yellow-100 text-yellow-800 font-semibold rounded-full">
                        {talent.githubStars.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700 max-w-xs">{talent.recentWork}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={talent.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredAndSortedData.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md mt-6">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            AI Talent Finder • Discover the next generation of AI pioneers
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Data aggregated from public LinkedIn profiles and research publications
          </p>
        </div>
      </footer>
    </div>
  );
}
