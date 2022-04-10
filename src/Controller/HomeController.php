<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRecordRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_index")
     */
    public function index(): Response
    {
        return $this->render('home/home.html.twig');
    }

    /**
     * @Route("/create-record", name="app_create_record")
     */
    public function create(Request $request): Response
    {
        return $this->json([
            $request,
            'message' => 'save success',
        ], 200);
    }

    /**
     * @Route("/home", name="app_home")
     */
    public function read(): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        return $this->render('home/index.html.twig', [
            'records' => $user->getUserRecords()->getValues(),
        ]);
    }

    /**
     * @Route("/update-record", name="app_update_record")
     */
    public function update(Request $request): Response
    {
        return $this->json([
            $request,
            'message' => 'update success',
        ], 200);
    }

    /**
     * @Route("/delete-record", name="app_delete_record")
     */
    public function delete(Request $request): Response
    {
        return $this->json([
            $request,
            'message' => 'delete success',
        ], 200);
    }

}
