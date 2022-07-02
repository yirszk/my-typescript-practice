export {};

let name: string = 'Yoichiro';

name = 'yau';

let nickname = 'yau' as const;
// nickname = 'Yoichiro' //エラー

let profile = { name: 'yau', height: 168 } as const;
// profile.name = 'Yoichiro'; //エラー
