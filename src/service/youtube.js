class Youtube{
  constructor(key){
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular(){
   return fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyBeIuhviDYUlPp4o-R8grqMvEpWy2qeL_w", 
      this.getRequestOptions
    )
    .then(response => response.json())
    .then(result => result.items);
  }

  async search(query){ 
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}}&type=vide&key=AIzaSyBeIuhviDYUlPp4o-R8grqMvEpWy2qeL_w`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube