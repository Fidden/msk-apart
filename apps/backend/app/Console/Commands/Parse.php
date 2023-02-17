<?php

namespace App\Console\Commands;

use App\Jobs\ParseJob;
use Illuminate\Console\Command;

class Parse extends Command
{
    protected $signature = 'parse';

    protected $description = 'Parse all products from crm';

    public function handle()
    {
        ParseJob::dispatch();
    }
}
