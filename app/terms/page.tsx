import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約 | Gallery Site',
  description: 'Gallery Siteの利用規約をご確認ください。',
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">利用規約</h1>
      <div className="prose max-w-none">
        <h2>1. はじめに</h2>
        <p>
          本利用規約（以下、「本規約」といいます。）は、当サイト（Gallery Site）が提供するすべてのサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
        </p>

        <h2>2. 利用登録</h2>
        <p>
          本サービスの利用を希望する方は、本規約に同意の上、当サイトの定める方法によって利用登録を行うものとします。
        </p>

        <h2>3. 禁止事項</h2>
        <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当サイト、他のユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
          <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>不正アクセスをし、またはこれを試みる行為</li>
          <li>他のユーザーに成りすます行為</li>
          <li>当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
          <li>その他、当サイトが不適切と判断する行為</li>
        </ul>

        {/* 他の規約内容を追加 */}

        <h2>10. お問い合わせ</h2>
        <p>
          本規約に関するお問い合わせは、下記の連絡先までお願いいたします。<br />
          Email: support@gallerysite.com
        </p>
      </div>
    </div>
  );
}