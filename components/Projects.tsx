import { PROJECTS } from '@/data/projectData';
import ProjectsInteractive from './sub-components/ProjectsInteractive';

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32 py-20">
            <div className="hero-enter">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Projects
              </span>
              <h2 className="heading-lg mt-4 mb-6 text-dark">
                Our latest
                <br />
                <span className="text-primary">projects.</span>
              </h2>

              <div className="w-16 h-1 bg-secondary mb-8" />

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At MD Mechatronica, we rely on honesty, discipline and hard work. We believe our
                success can be attributed to upholding a simple set of core values that date back to
                the beginning of the company.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                MD Mechatronica is an integrated service firm offering installation, maintenance,
                and repair services to customers throughout Europe. Unique to MD Mechatronica is the
                fact that we conduct all services in-house with highly skilled technicians.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-gray-600 text-sm">Projects Done</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">200+</p>
                  <p className="text-gray-600 text-sm">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">15+</p>
                  <p className="text-gray-600 text-sm">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>

          <ProjectsInteractive projects={PROJECTS} />
        </div>
      </div>
    </section>
  );
}
