declare namespace SickComponentsLibrary {
    // Here we can declare some types
    // that will be used across components later.
    type Avatar = {
      src: string;
    }
    
    type buttonStyle = "primary" | "Secondary";

    // Everything that should be accessible outside
    // can be exported via export keyword.
    export type UserProp = {
      id: string;
      name: string;
      avatar: Avatar
    }
    
    // You can also declare interfaces if needed.
    type SwipeDirection = 'left' | 'right' | 'top' | 'bottom'
    
    export interface Swipable {
      swipe(): SwipeDirection;
    }
  }