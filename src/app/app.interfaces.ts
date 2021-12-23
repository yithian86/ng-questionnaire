export namespace AppTypings {

  export interface IFlashMessageData {
    label: string,
    type: FLASH_MESSAGE_TYPES,
    icon?: string,
    sticked?: boolean
  }

  export enum FLASH_MESSAGE_TYPES {
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING'
  }
}
