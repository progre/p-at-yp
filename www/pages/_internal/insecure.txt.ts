import { GetServerSidePropsContext } from 'next';
import * as parser from 'peercast-yp-channels-parser';
import handler from '../../utils/handler';
import { vercel } from '../../utils/env';
import { pageView } from '../../utils/pageView';

const protocol = `http${vercel ? 's' : ''}`;

function insecureHeader(): string {
  const now = new Date();
  const channels = [
    {
      name: 'p@◆Insecure',
      id: '00000000000000000000000000000000',
      ip: '',
      url: 'https://p-at.net/index.txt',
      genre: '',
      desc: '通信は暗号化されていません',
      bandwidthType: '',
      listeners: -9,
      relays: -9,
      bitrate: 0,
      type: 'RAW',
      track: {
        creator: '',
        album: '',
        title: '',
        url: '',
      },
      createdAt: now.getTime(),
      comment: '',
      direct: false,
    },
  ];
  return parser.stringify(channels, now);
}

export async function getServerSideProps({
  req,
  resolvedUrl,
  res,
}: GetServerSidePropsContext): Promise<unknown> {
  await pageView(req, resolvedUrl);
  const originURL = `${protocol}://${req.headers.host}/_internal/index.txt`;
  const originRes = await fetch(originURL);
  const originText = await originRes.text();
  handler(res, insecureHeader() + '\n' + originText, false);
  return { props: {} };
}

export default function Null(): null {
  return null;
}