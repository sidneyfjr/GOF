/*
Neste exemplo, temos a hierarquia de dispositivos (implementações) e a hierarquia de reprodutores
de mídia (abstrações). A classe MediaPlayer contém uma referência à classe de implementação Device, 
permitindo que diferentes tipos de dispositivos reproduzam diferentes tipos de mídia 
sem a necessidade de criar subclasses separadas para cada combinação dispositivo-mídia. 
Isso ilustra como o padrão Bridge separa a abstração da implementação, permitindo flexibilidade
e extensibilidade no design de sistemas de software.
*/

// Implementação de dispositivos
class Device {
    constructor(type) {
      this.type = type;
    }
  }
  
  class Smartphone extends Device {
    constructor() {
      super("Smartphone");
    }
  
    play(media) {
      console.log(`Playing ${media} on a ${this.type}`);
    }
  }
  
  class Desktop extends Device {
    constructor() {
      super("Desktop");
    }
  
    play(media) {
      console.log(`Playing ${media} on a ${this.type}`);
    }
  }
  
  // Abstração de reprodutor de mídia
  class MediaPlayer {
    constructor(device) {
      this.device = device;
    }
  
    playMedia(media) {
      console.log(`Preparing to play ${media}`);
      this.device.play(media);
    }
  }
  
  // Exemplo de uso
  const smartphone = new Smartphone();
  const desktop = new Desktop();
  
  const mediaPlayerForSmartphone = new MediaPlayer(smartphone);
  const mediaPlayerForDesktop = new MediaPlayer(desktop);
  
  mediaPlayerForSmartphone.playMedia("song.mp3"); // Output: Preparing to play song.mp3 / Playing song.mp3 on a Smartphone
  mediaPlayerForDesktop.playMedia("video.mp4"); // Output: Preparing to play video.mp4 / Playing video.mp4 on a Desktop
  