import Image from 'next/image';

export class Employee {
  constructor(name, role, imageOptions) {
    this.name = name;
    this.role = role;
    this.image = {
      src: imageOptions.src,
      alt: imageOptions.alt || `${name} - ${role}`,
      width: imageOptions.width || 300,  // Valore base per l'ottimizzazione
      height: imageOptions.height || 300, // Stesso valore di width
      className: imageOptions.className || 'rounded-full object-cover',
    };
    this.imageSize = imageOptions.size || '3vw'; 
  }

  getImageComponent() {
    return (
      <div className="relative rounded-full overflow-hidden shrink-0  inset-shadow-xl"
        style={{
          width: this.imageSize,
          height: this.imageSize,
        }}>
        <Image
          src={this.image.src}
          alt={this.image.alt}
          width={this.image.width}
          height={this.image.height}
          className={this.image.className}
        />
      </div>
    );
  }

  getCardComponent(scrollProgress, index) {
    return (
      <div
        key={`${this.name}-${index}`}
        className="bg-gradient-blue p-7 rounded-xl shadow-xl transition-all duration-500 flex flex-row items-center gap-5 w-full"
        style={{
          transform: `translateY(${scrollProgress > (0.3 + index * 0.15) ? 0 : 50}px)`,
          opacity: scrollProgress > (0.3 + index * 0.15) ? 1 : 0,
          transitionDelay: `${index * 100 + 200}ms`
        }}
      >

        {this.getImageComponent()}
        <div className="flex flex-col m-2">
          <h3 className="text-2xl font-extrabold text-white">{this.name}</h3>
          <p className="text-gray-300 text-md font-bold mt-3">{this.role}</p>
        </div>
      </div>
    );
  }
}