<?php

namespace App\Services;

use Symfony\Component\HttpClient\HttpClient;

class PicturesGenerator
{

    
    public function generateRandomImg()
    {
        $client = HttpClient::create();
        $response = $client->request('GET', 'https://picsum.photos/v2/list?page=2&limit=100');
        $results = $response->toArray();

        $imgUrls = [];
        foreach ($results as $result){
            array_push($imgUrls, $result['download_url']);
        }


        return $imgUrls;
    }
}