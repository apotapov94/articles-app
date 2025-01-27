import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Article {
  id: number
  title: string
  keyword: string
  text: string
  image: string
}

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [
      {
        id: 1,
        title: 'Тестовая статья1',
        keyword: 'test-article1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 2,
        title: 'Статья2',
        keyword: 'statia2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 3,
        title: 'Статья3',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 4,
        title: 'Статья4',
        keyword: 'statia4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 5,
        title: 'Тестовая статья5',
        keyword: 'test-article5',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 6,
        title: 'Статья6',
        keyword: 'statia6',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 7,
        title: 'Статья7',
        keyword: 'statia7',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 8,
        title: 'Статья8',
        keyword: 'statia8',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 9,
        title: 'Тестовая статья9',
        keyword: 'test-article9',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 10,
        title: 'Статья10',
        keyword: 'statia10',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 11,
        title: 'Статья11',
        keyword: 'statia11',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 12,
        title: 'Статья12',
        keyword: 'statia12',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 13,
        title: 'Тестовая статья13',
        keyword: 'test-article13',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 14,
        title: 'Статья14',
        keyword: 'statia14',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 15,
        title: 'Статья15',
        keyword: 'statia15',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 16,
        title: 'Статья16',
        keyword: 'statia16',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 17,
        title: 'Тестовая статья17',
        keyword: 'test-article17',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 18,
        title: 'Статья18',
        keyword: 'statia18',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 19,
        title: 'Статья19',
        keyword: 'statia19',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 20,
        title: 'Статья20',
        keyword: 'statia20',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 21,
        title: 'Тестовая статья21',
        keyword: 'test-article21',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 22,
        title: 'Статья22',
        keyword: 'statia22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 23,
        title: 'Статья23',
        keyword: 'statia23',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 24,
        title: 'Статья24',
        keyword: 'statia24',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 25,
        title: 'Статья25',
        keyword: 'statia25',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 26,
        title: 'Статья26',
        keyword: 'statia26',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 27,
        title: 'Статья27',
        keyword: 'statia27',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 28,
        title: 'Статья28',
        keyword: 'statia28',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 29,
        title: 'Статья29',
        keyword: 'statia29',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 30,
        title: 'Статья30',
        keyword: 'statia30',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
    ],
    pagination: {
      elemsOnPage: 4,
      curPage: 1,
    },
  }),
  actions: {
    nextPage() {
      this.pagination.curPage++
    },
    prevPage() {
      this.pagination.curPage--
    },
    toPage(index: number) {
      this.pagination.curPage = index
    },
    toFirstPage() {
      this.pagination.curPage = 1
    },
  },
  getters: {
    getArticleByKeyword:
      (state) =>
      (keyword: string | string[]): Article => {
        return state.articles.filter((article) => article.keyword == keyword)[0]
      },
    getArticlesPage: (state): Array<Article> => {
      const start = state.pagination.elemsOnPage * (state.pagination.curPage - 1)
      const end = start + state.pagination.elemsOnPage
      const result = state.articles.slice(start, end)
      return result
    },
    getLastPage: (state): number => {
      let lastPageIndex
      if (state.articles.length % state.pagination.elemsOnPage) {
        lastPageIndex = Math.floor(state.articles.length / state.pagination.elemsOnPage) + 1
      } else {
        lastPageIndex = state.articles.length / state.pagination.elemsOnPage
      }
      return lastPageIndex
    },
    getPrevPrevPage: (state): number => {
      const page = state.pagination.curPage - 2
      return page
    },
    getPrevPage: (state): number => {
      const page = state.pagination.curPage - 1
      return page
    },
    getNextPage: (state): number => {
      const page = state.pagination.curPage + 1
      return page
    },
    getNextNextPage: (state): number => {
      const page = state.pagination.curPage + 2
      return page
    },
  },
})
