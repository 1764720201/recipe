interface RootObject {
  itemList: ItemList[];
  count: number;
  total: number;
  nextPageUrl: string;
  adExist: boolean;
}

export interface ItemList {
  type: string;
  data: Data;
  trackingData?: any;
  tag?: any;
  id: number;
  adIndex: number;
}

interface Data {
  dataType: string;
  id: number;
  title: string;
  description: string;
  library: string;
  tags: Tag[];
  consumption: Consumption;
  resourceType: string;
  slogan?: any;
  provider: Provider;
  category: string;
  author: Author;
  cover: Cover;
  playUrl: string;
  thumbPlayUrl?: any;
  duration: number;
  webUrl: WebUrl;
  releaseTime: number;
  playInfo: PlayInfo[];
  campaign?: any;
  waterMarks?: any;
  ad: boolean;
  adTrack: any[];
  type: string;
  titlePgc: string;
  descriptionPgc: string;
  remark?: string;
  ifLimitVideo: boolean;
  searchWeight: number;
  brandWebsiteInfo?: any;
  videoPosterBean?: any;
  idx: number;
  shareAdTrack?: any;
  favoriteAdTrack?: any;
  webAdTrack?: any;
  date: number;
  promotion?: any;
  label?: any;
  labelList: any[];
  descriptionEditor: string;
  collected: boolean;
  reallyCollected: boolean;
  played: boolean;
  subtitles: any[];
  lastViewTime?: any;
  playlists?: any;
  src?: any;
  recallSource?: any;
  recall_source?: any;
}

interface PlayInfo {
  height: number;
  width: number;
  urlList: UrlList[];
  name: string;
  type: string;
  url: string;
}

interface UrlList {
  name: string;
  url: string;
  size: number;
}

interface WebUrl {
  raw: string;
  forWeibo: string;
}

interface Cover {
  feed: string;
  detail: string;
  blurred: string;
  sharing?: any;
  homepage?: any;
}

interface Author {
  id: number;
  icon: string;
  name: string;
  description: string;
  link: string;
  latestReleaseTime: number;
  videoNum: number;
  adTrack?: any;
  follow: Follow;
  shield: Shield;
  approvedNotReadyVideoCount: number;
  ifPgc: boolean;
  recSort: number;
  expert: boolean;
}

interface Shield {
  itemType: string;
  itemId: number;
  shielded: boolean;
}

interface Follow {
  itemType: string;
  itemId: number;
  followed: boolean;
}

interface Provider {
  name: string;
  alias: string;
  icon: string;
}

interface Consumption {
  collectionCount: number;
  shareCount: number;
  replyCount: number;
  realCollectionCount: number;
}

interface Tag {
  id: number;
  name: string;
  actionUrl: string;
  adTrack?: any;
  desc?: string | string;
  bgPicture: string;
  headerImage: string;
  tagRecType: string;
  childTagList?: any;
  childTagIdList?: any;
  haveReward: boolean;
  ifNewest: boolean;
  newestEndTime?: any;
  communityIndex: number;
}
