// components/Employee.js (o lib/Employee.js)
import Image from 'next/image';

export class Employee {
  constructor(name, role, imageOptions) {
    this.name = name;
    this.role = role;
    this.image = {
      src: imageOptions.src,
      alt: imageOptions.alt || '',
      width: imageOptions.width || 300,
      height: imageOptions.height || 300,
      className: imageOptions.className || 'rounded-lg object-cover',
      otherProps: imageOptions.otherProps || {},
    };
  }

  getImageComponent() {
    return (
      <div className="h-48 relative rounded-lg mb-4">
        <Image
          src={this.image.src}
          alt={this.image.alt}
          width={this.image.width}
          height={this.image.height}
          className={this.image.className}
          {...this.image.otherProps}
        />
      </div>
    );
  }

  getCardComponent(scrollProgress, index) {
    return (
      <div
        key={`${this.name}-${index}`}
        className="bg-white p-6 rounded-xl shadow-lg transition-all duration-500"
        style={{
          transform: `translateY(${scrollProgress > (0.3 + index * 0.15) ? 0 : 50}px)`,
          opacity: scrollProgress > (0.3 + index * 0.15) ? 1 : 0,
          transitionDelay: `${index * 100 + 200}ms`
        }}
      >
        {this.getImageComponent()}
        <h3 className="text-xl font-bold text-blue-900">{this.role}</h3>
        <p className="text-gray-600 mt-2">{this.name}</p>
      </div>
    );
  }
}

// Funzione helper per creare il team (opzionale)
export function createTeam(teamData) {
  return teamData.map(member => new Employee(
    member.name,
    member.role,
    member.imageOptions
  ));
}