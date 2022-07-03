export {};

// インデックスシグネチャーの書き方
// { [ index: typeForIndex ]: typeForValue}

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {name: 'yau', underTwenty: true}
profile.name = 'yau';
profile.age = 29;
profile.nationality ='Japan'; // インデックスシグネチャーのおかげで追加できる 
