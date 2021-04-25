import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flags'
})
export class FlagsPipe implements PipeTransform {

  transform(language: string): string {
    switch (language){
      case "Dutch":
        return "🇳🇱 Dutch"
      case "French":
        return "🇫🇷 French"
      case "English":
        return "🇬🇧 English"
      case "German":
        return "🇩🇪 German"
    }
  }

}
