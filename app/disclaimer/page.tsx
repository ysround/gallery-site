import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '免責事項 | Gallery Site',
  description: 'Gallery Siteの免責事項をご確認ください。',
};

export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">免責事項</h1>
      <div className="prose max-w-none">
        <h2>1. 情報の正確性</h2>
        <p>
          当サイト（Gallery Site）は、提供する情報の正確性、完全性、有用性、最新性等について、いかなる保証もいたしません。当サイトの情報を利用されたことで生じるいかなる損害についても、当サイトは責任を負いません。
        </p>

        <h2>2. 外部リンク</h2>
        <p>
          当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について当サイトは一切の責任を負いません。
        </p>

        <h2>3. 著作権</h2>
        <p>
          当サイトで掲載している画像の著作権・肖像権等は、各権利所有者に帰属します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
        </p>

        <h2>4. 損害等の責任</h2>
        <p>
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。
        </p>

        <h2>5. 記載内容の変更</h2>
        <p>
          当サイトは、記載内容を予告なしに変更する場合がありますので、あらかじめご了承ください。
        </p>

        <h2>6. お問い合わせ</h2>
        <p>
          本免責事項に関するお問い合わせは、下記の連絡先までお願いいたします。<br />
          Email: support@gallerysite.com
        </p>
      </div>
    </div>
  );
}