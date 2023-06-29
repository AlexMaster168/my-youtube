import {IVideoDto} from "@/services/types/video.interface";

export interface IVideoItem {
    item: IVideoDto,
    isBig?: boolean,
    isAvatar?: boolean
}
