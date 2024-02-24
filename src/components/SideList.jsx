import VideoCardList from "./VideoCardList"

const SideList = (
  {
    className=""
  }
) => {
  return (
    <div className={`w-full rounded-lg border-2 p-4 border-white ${className}`}>
      <VideoCardList/>
      <VideoCardList/>
      <VideoCardList/>
      <VideoCardList/>
      <VideoCardList/>
      <VideoCardList/>
    </div>
  )
}

export default SideList