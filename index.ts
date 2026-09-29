import { YouTubeCommentsScraper } from './nodes/YouTubeCommentsScraper/YouTubeCommentsScraper.node';
import { ApifyApi } from './credentials/ApifyApi.credentials';

export const nodeTypes = [YouTubeCommentsScraper];

export const credentialTypes = [ApifyApi];
