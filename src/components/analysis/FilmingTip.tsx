import React from 'react';

export const FilmingTip = (): React.ReactElement => {
  return (
    <section className="flex flex-col gap-1.5 rounded-(--radius-md) bg-gray-100 px-4 py-3">
      <h3 className="subhead6 text-primary">촬영 팁</h3>
      <p className="body3 text-gray-400">측면에서 10초 동안 자연스럽게 걷는 영상을 촬영해주세요</p>
    </section>
  );
};
